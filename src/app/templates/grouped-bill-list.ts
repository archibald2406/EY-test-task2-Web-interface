interface GroupedBillList {
  incomingBalance: {
    groupedBillNumber: string,
    groupedAsset: string,
    groupedLiability: string,
    title: string
  }[];
  turns: {
    groupedBillNumber: string,
    groupedDebit: string,
    groupedCredit: string,
    title: string
  }[];
  outcomingBalance: {
    groupedBillNumber: string,
    groupedAsset: string,
    groupedLiability: string,
    title: string
  }[];
}
