#[error_code]
pub enum EscrowError {
    #[msg("Invalid escrow status for this operation.")]
    InvalidStatus,
    #[msg("Invalid winner for dispute resolution.")]
    InvalidWinner,
    #[msg("Timeout has not been reached.")]
    TimeoutNotReached,
}