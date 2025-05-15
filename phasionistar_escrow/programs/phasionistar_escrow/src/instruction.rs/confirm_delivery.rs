use anchor_lang::prelude::*;
use crate::{
    state::EscrowAccount,
    error::EscrowError,
    state::EscrowStatus,
};
 pub mod confirm_delivery{
    use super::*;
    pub fn confirm_delivery(ctx: Context<ConfirmDelivery>) -> Result<()> {
        let escrow_account = &mut ctx.accounts.escrow_account;
        require!(
            escrow_account.status == EscrowStatus::Funded,
            EscrowError::InvalidStatus
        );
        escrow_account.status = EscrowStatus::Delivered;
        emit!(EscrowEvent::DeliveryConfirmed {
            client: escrow_account.client,
            designer: escrow_account.designer,
        });
        Ok(())
    }
 }

#[derive(Accounts)]
pub struct ConfirmDelivery<'info> {
    #[account(mut)]
    pub escrow_account: Account<'info, EscrowAccount>,
}