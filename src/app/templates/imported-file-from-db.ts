interface ImportedFileFromDb {
  incomingBalance: {
    billNumber: string,
    asset: string,
    liability: string,
    groupedBillNumber: string,
    groupedAsset: string,
    groupedLiability: string,
    title: string
  }[];
  turns: {
    billNumber: string,
    debit: string,
    credit: string,
    groupedBillNumber: string,
    groupedDebit: string,
    groupedCredit: string,
    title: string
  }[];
  outcomingBalance: {
    billNumber: string,
    asset: string,
    liability: string,
    groupedBillNumber: string,
    groupedAsset: string,
    groupedLiability: string,
    title: string
  }[];
}
