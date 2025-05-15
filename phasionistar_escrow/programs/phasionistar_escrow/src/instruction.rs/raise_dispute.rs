use anchor_lang::prelude::*;
use crate::{
    state::EscrowAccount,
    error::EscrowError,
    state::EscrowStatus,
};
pub mod raise_dispute{
    use super::*;
    pub fn raise_dispute(ctx: Context<RaiseDispute>) -> Result<()> {
        let escrow_account = &mut ctx.accounts.escrow_account;
        require!(
            escrow_account.status == EscrowStatus::Delivered,
            EscrowError::InvalidStatus
        );
        escrow_account.status = EscrowStatus::Disputed;
        emit!(EscrowEvent::DisputeRaised {
            client: escrow_account.client,
            designer: escrow_account.designer,
        });
        Ok(())
    }
}

#[derive(Accounts)]
pub struct RaiseDispute<'info> {
    #[account(mut)]
    pub escrow_account: Account<'info, EscrowAccount>,
}
