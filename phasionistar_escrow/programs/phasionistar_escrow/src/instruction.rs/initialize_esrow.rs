use anchor_lang::prelude::*;
use crate::{
    state::EscrowAccount,
    error::EscrowError,
    state::EscrowStatus,
};

pub mod initialize_escrow{
    use super::*;

    pub fn initialize_escrow(
        ctx: Context<InitializeEscrow>,
        amount: u64,
        design_id: String,
    ) -> Result<()> {
        let escrow_account = &mut ctx.accounts.escrow_account;
        escrow_account.client = *ctx.accounts.client.key;
        escrow_account.designer = *ctx.accounts.designer.key;
        escrow_account.amount = amount;
        escrow_account.status = EscrowStatus::Funded;
        escrow_account.design_id = design_id;
        escrow_account.created_at = Clock::get()?.unix_timestamp;
        escrow_account.timeout = Clock::get()?.unix_timestamp + 604800; // 7 days
        emit!(EscrowEvent::PaymentInitiated {
            client: escrow_account.client,
            designer: escrow_account.designer,
            amount,
            design_id,
        });
        Ok(())
    }
}



#[derive(Accounts)]
pub struct InitializeEscrow<'info> {
    #[account(init, payer = client, space = 8 + 128)]
    pub escrow_account: Account<'info, EscrowAccount>,
    #[account(mut)]
    pub client: Signer<'info>,
    pub designer: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}