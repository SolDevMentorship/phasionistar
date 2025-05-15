#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq)]
pub enum EscrowStatus {
    Funded,
    Delivered,
    Completed,
    Disputed,
    Resolved,
    TimeoutRefunded,
}


pub struct Funded{
    pub client:Pubkey,
    pub amount:u64,
    pub design_id:String,
    pub status:EscrowStatus::Funded,
}

pub struct Delivered{
    pub designer:Pubkey,
    pub status:EscrowStatus::Delivered,
}

pub struct Completed{
    pub client:Pubkey,
    pub designer:Pubkey,
    pub status:EscrowStatus::Completed,
}

pub struct Disputed{
    pub client:Pubkey,
    pub designer:Pubkey,
    pub status:EscrowStatus::Disputed,
}

pub struct Resolved{
    pub client:Pubkey,
    pub designer:Pubkey,
    pub status:EscrowStatus::Resolved,
}

pub struct TimeoutRefunded{
    pub client:Pubkey,
    pub designer:Pubkey,
    pub status:EscrowStatus::TimeoutRefunded,
}
