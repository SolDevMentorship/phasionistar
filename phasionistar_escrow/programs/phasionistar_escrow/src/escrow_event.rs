
#[event]
pub enum EscrowEvent {
    PaymentInitiated {
        client: Pubkey,
        designer: Pubkey,
        amount: u64,
        design_id: String,
    },
    DeliveryConfirmed {
        client: Pubkey,
        designer: Pubkey,
    },
    FundsReleased {
        client: Pubkey,
        designer: Pubkey,
    },
    DisputeRaised {
        client: Pubkey,
        designer: Pubkey,
    },
    DisputeResolved {
        client: Pubkey,
        designer: Pubkey,
        winner: Pubkey,
    },
    TimeoutRefunded {
        client: Pubkey,
        designer: Pubkey,
    },
}