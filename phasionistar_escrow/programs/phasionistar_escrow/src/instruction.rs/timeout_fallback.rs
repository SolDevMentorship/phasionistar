use anchor_lang::prelude::*;
use crate::{
    state::EscrowAccount,
    error::EscrowError,
    state::EscrowStatus,};
pub mod timeout_fallback{
    use super::*;
    pub fn timeout_fallback(ctx: Context<TimeoutFallback>) -> Result<()> {
    let escrow_account = &mut ctx.accounts.escrow_account;
        require!(
            Clock::get()?.unix_timestamp > escrow_account.timeout,
            EscrowError::TimeoutNotReached
        );
        **ctx.accounts.client.to_account_info().try_borrow_mut_lamports()? +=
            escrow_account.amount;
        **ctx.accounts.escrow_account.to_account_info().try_borrow_mut_lamports()? -=
            escrow_account.amount;
        escrow_account.status = EscrowStatus::TimeoutRefunded;
        emit!(EscrowEvent::TimeoutRefunded {
            cl ient: escrow_account.client,
            designer: escrow_account.designer,
        });
        Ok(())
    }
}

    

#[derive(Accounts)]
pub struct TimeoutFallback<'info> {
    #[account(mut)]
    pub escrow_account: Account<'info, EscrowAccount>,
    #[account(mut)]
    pub client: AccountInfo<'info>,
}
