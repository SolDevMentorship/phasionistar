use anchor_lang::prelude::*;
use crate::{
    state::EscrowAccount,
    error::EscrowError,
    state::EscrowStatus,
};
pub mod resolve_dispute{
    use super::*;

    
pub fn resolve_dispute(ctx: Context<ResolveDispute>, winner: Pubkey) -> Result<()> {
    let escrow_account = &mut ctx.accounts.escrow_account;
    require!(
        escrow_account.status == EscrowStatus::Disputed,
        EscrowError::InvalidStatus
    );
    if winner == escrow_account.client {
        **ctx.accounts.client.to_account_info().try_borrow_mut_lamports()? +=
            escrow_account.amount;
    } else if winner == escrow_account.designer {
        **ctx.accounts.designer.to_account_info().try_borrow_mut_lamports()? +=
            escrow_account.amount;
    } else {
        return Err(EscrowError::InvalidWinner.into());
    }
    **ctx.accounts.escrow_account.to_account_info().try_borrow_mut_lamports()? -=
        escrow_account.amount;
    escrow_account.status = EscrowStatus::Resolved;
    emit!(EscrowEvent::DisputeResolved {
        client: escrow_account.client,
        designer: escrow_account.designer,
        winner,
    });
    Ok(())
}
}

#[derive(Accounts)]
pub struct ResolveDispute<'info> {
    #[account(mut)]
    pub escrow_account: Account<'info, EscrowAccount>,
    pub client: AccountInfo<'info>,
    pub designer: AccountInfo<'info>,
}
