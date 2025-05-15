
#[account]
pub struct EscrowAccount {
    pub client: Pubkey,
    pub designer: Pubkey,
    pub amount: u64,
    pub status: EscrowStatus,
    pub design_id: String,
    pub created_at: i64,
    pub timeout: i64,
}

impl EscrowAccount{
    pub fn initialize_escrow(
        &mut self,
        client: Pubkey,
        designer: Pubkey,
        amount: u64,
        design_id: String,
    ) {
        self.client = client;
        self.designer = designer;
        self.amount = amount;
        self.status = EscrowStatus::Funded;
        self.design_id = design_id;
        self.created_at = Clock::get().unwrap().unix_timestamp;
        self.timeout = Clock::get().unwrap().unix_timestamp + 604800; // 7 days
    }

    pub fn confirm_delivery(&mut self) {
        self.status = EscrowStatus::Delivered;
    }

    pub fn approve_completion(&mut self) {
        self.status = EscrowStatus::Completed;
    }
    pub fn raise_dispute(&mut self) {
        self.status = EscrowStatus::Disputed;
    }

    pub fn resolve_dispute(&mut self) {
        self.status = EscrowStatus::Resolved;
    }

    pub fn timeout_refund(&mut self) {
        self.status = EscrowStatus::TimeoutRefunded;
    }
}