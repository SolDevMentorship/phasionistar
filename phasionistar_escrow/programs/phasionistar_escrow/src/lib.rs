use anchor_lang::prelude::*;

pub mod instruction;
pub mod state;
pub mod error;

pub use instruction::*;
pub use state::*;
pub use error::*;

declare_id!("CrC5NAxSVdrNYASkaDe6EbxoHiRuCKxUfCyjaeFwjzns");


#[program]
pub mod phasionistar_escrow {
    use super::*;
    pub fn initialize_escrow(
        ctx: Context<InitializeEscrow>,
        amount: u64,
        item_name: String,
    ) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        escrow.amount = amount;
        escrow.item_name = item_name;
        Ok(())
    }
    pub fn confirm_delivery(
        ctx: Context<ConfirmDelivery>,
    ) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        require!(
            escrow.status == EscrowStatus::Funded,
            EscrowError::InvalidStatus
        );
        escrow.status = EscrowStatus::Delivered;
        emit!(EscrowEvent::DeliveryConfirmed {
            client: escrow.client,
            designer: escrow.designer,
        });
        Ok(())
    }
    pub fn approve_completion(
        ctx: Context<ApproveCompletion>,
    ) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        require!(
            escrow.status == EscrowStatus::Delivered,
            EscrowError::InvalidStatus
        );
        escrow.status = EscrowStatus::Completed;
        emit!(EscrowEvent::CompletionApproved {
            client: escrow.client,
            designer: escrow.designer,
        });
        Ok(())
    }
    pub fn raise_dispute(
        ctx: Context<RaiseDispute>,
    ) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        require!(
            escrow.status == EscrowStatus::Delivered,
            EscrowError::InvalidStatus
        );
        escrow.status = EscrowStatus::Disputed;
        emit!(EscrowEvent::DisputeRaised {
            client: escrow.client,
            designer: escrow.designer,
        });
        Ok(())
    }
    pub fn resolve_dispute(
        ctx: Context<ResolveDispute>,
        resolution: DisputeResolution,
    ) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        require!(
            escrow.status == EscrowStatus::Disputed,
            EscrowError::InvalidStatus
        );
        escrow.status = match resolution {
            DisputeResolution::Refund => EscrowStatus::Refunded,
            DisputeResolution::Release => EscrowStatus::Completed,
        };
        emit!(EscrowEvent::DisputeResolved {
            client: escrow.client,
            designer: escrow.designer,
            resolution,
        });
        Ok(())
    }
    pub fn timeout_fallback(
        ctx: Context<TimeoutFallback>,
    ) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        require!(
            escrow.status == EscrowStatus::Funded,
            EscrowError::InvalidStatus
        );
        escrow.status = EscrowStatus::TimedOut;
        emit!(EscrowEvent::TimeoutFallback {
            client: escrow.client,
            designer: escrow.designer,
        });
        Ok(())
    }
    

}













