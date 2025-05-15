use anchor_lang::prelude::*;
use crate::{
    state::EscrowAccount,
    error::EscrowError,
};
pub mod approve_completion{
    use super::*;
    pub fn approve_completion(ctx: Context<ApproveCompletion>) -> Result<()> {
        let escrow_account = &mut ctx.accounts.escrow_account;
        require!(
            escrow_account.status == EscrowStatus::Delivered,
            EscrowError::InvalidStatus
        );
        **ctx.accounts.designer.to_account_info().try_borrow_mut_lamports()? +=
            escrow_account.amount;
        **ctx.accounts.escrow_account.to_account_info().try_borrow_mut_lamports()? -=
            escrow_account.amount;
        escrow_account.status = EscrowStatus::Completed;
        emit!(EscrowEvent::FundsReleased {
            client: escrow_account.client,
            designer: escrow_account.designer,
        });
        Ok(())
    }
}

#[derive(Accounts)]
pub struct ApproveCompletion<'info> {
    #[account(mut)]
    pub escrow_account: Account<'info, EscrowAccount>,
    #[account(mut)]
    pub designer: AccountInfo<'info>,
}