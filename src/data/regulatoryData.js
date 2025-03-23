export const regulatoryData = {
  Retail: [
    "INTERNATIONAL AUTO LOAN",
    "US AUTO LOAN",
    "INTERNATIONAL CREDIT CARD",
    "INTERNATIONAL HOME EQUITY",
    "INTERNATIONAL FIRST LIEN MORTGAGE",
    "INTERNATIONAL OTHER CONSUMER SCHEDULE",
    "US OTHER CONSUMER",
    "INTERNATIONAL SMALL BUSINESS",
    "US SMALL BUSINESS",
    "STUDENT LOAN",
  ],
  Securities: [
    "SECURITIES 1 (MAIN SCHEDULE)",
    "SECURITIES 2 (INVESTMENT SECURITIES WITH DESIGNATED ACCOUNTING HEDGES)",
  ],
  "Regulatory Capital Instruments": [
    "REGULATORY CAPITAL AND SUBORDINATED DEBT INSTRUMENTS AS OF QUARTER END",
    "REGULATORY CAPITAL AND SUBORDINATED DEBT INSTRUMENT REPURCHASES/REDEMPTIONS DURING QUARTER",
    "REGULATORY CAPITAL AND SUBORDINATED DEBT INSTRUMENTS ISSUANCES DURING QUARTER",
  ],
  "Regulatory Capital": [],
  "Operational Risk": [
    "OPERATIONAL LOSS HISTORY",
    "INTERNAL BUSINESS LINE",
    "UNIT-OF-MEASURE (UOM)",
    "THRESHOLD INFORMATION",
    "LEGAL RESERVES FREQUENCY",
  ],
  Trading: [
    "EQUITY BY GEOGRAPHY",
    "EQUITY SPOT-VOL GRID",
    "OTHER EQUITY",
    "FX SPOT SENSITIVITIES",
    "FX VEGA",
    "RATES DV01",
    "RATES VEGA",
    "OTHER RATES",
    "ENERGY",
    "METALS",
    "AGS & SOFTS",
    "COMMODITY INDICES",
    "COMMODITY SPOT-VOL GRIDS",
    "SECURITIZED PRODUCTS",
    "AGENCIES",
    "MUNIS",
    "AUCTION RATE SECURITIES (ARS)",
    "CORPORATE CREDIT-ADVANCED",
    "CORPORATE CREDIT-EMERGING MARKETS",
    "SOVEREIGN CREDIT",
    "CREDIT CORRELATION",
    "IDR-CORPORATE CREDIT",
    "IDR-JUMP TO DEFAULT",
    "PRIVATE EQUITY",
    "OTHER FAIR VALUE ASSETS",
  ],
  PPNR: [
    "PPNR SUBMISSION WORKSHEET",
    "PPNR NET INTEREST INCOME (NII) WORKSHEET",
    "PPNR METRICS",
  ],
  "Wholesale Risk": [
    "CORPORATE LOAN DATA SCHEDULE",
    "COMMERCIAL REAL ESTATE SCHEDULE",
    "LINE OF BUSINESS SCHEDULE",
    "INTERNAL RISK RATING SCHEDULE",
  ],
};

export const mockRulesData = [
  {
    id: 1,
    rule_name: "Missing Values Check",
    rule_syntax:
      "COUNT(CASE WHEN {field_name} IS NULL THEN 1 ELSE NULL END) > 0",
    field_name: "customer_id",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 2,
    rule_name: "Unique Value Check",
    rule_syntax: "COUNT(DISTINCT {field_name}) = COUNT({field_name})",
    field_name: "email",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 3,
    rule_name: "Date Range Check",
    rule_syntax: "{field_name} BETWEEN '2023-01-01' AND '2023-12-31'",
    field_name: "order_date",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 4,
    rule_name: "String Length Check",
    rule_syntax: "LENGTH({field_name}) <= 50",
    field_name: "product_name",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 5,
    rule_name: "Numeric Range Check",
    rule_syntax: "{field_name} >= 0 AND {field_name} <= 1000",
    field_name: "quantity",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 6,
    rule_name: "Regex Pattern Check",
    rule_syntax:
      "REGEXP_CONTAINS({field_name}, r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')",
    field_name: "email",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 7,
    rule_name: "Categorical Value Check",
    rule_syntax: "{field_name} IN ('Active', 'Inactive', 'Pending')",
    field_name: "status",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 8,
    rule_name: "Decimal Precision Check",
    rule_syntax: "CAST({field_name} AS DECIMAL(10, 2)) = {field_name}",
    field_name: "price",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 9,
    rule_name: "Negative Value Check",
    rule_syntax: "{field_name} >= 0",
    field_name: "sales_amount",
    riskScore: 0,
    chatHistory: [],
  },
  {
    id: 10,
    rule_name: "Consistent Case Check",
    rule_syntax:
      "{field_name} = UPPER({field_name}) OR {field_name} = LOWER({field_name})",
    field_name: "country",
    riskScore: 0,
    chatHistory: [],
  },
];

// export const rulesColumns = [
//   {
//     id: "field_name",
//     label: "Field Name",
//     minWidth: 170,
//   },
//   { id: "rule_name", label: "Name", minWidth: 170 },
//   { id: "rule_syntax", label: "Rule", minWidth: 200 },
//   {
//     id: "action",
//     label: "Action",
//     minWidth: 200,
//     align: "right",
//   },
// ];

export const mockIssues = [
  {
    id: "ISSUE-2023-001",
    fieldName: "customer_email",
    rule: "Email Format Validation",
    issueDescription:
      "Multiple customer email addresses missing '@' symbol or domain extension",
    remediation:
      "Apply regex validation pattern for email format (user@domain.ext) and implement front-end validation to prevent invalid inputs",
  },
  {
    id: "ISSUE-2023-002",
    fieldName: "transaction_date",
    rule: "Date Range Validation",
    issueDescription:
      "Transaction dates found in the future (beyond current date)",
    remediation:
      "Add date boundary check to ensure transaction dates cannot exceed current date and implement calendar control with date limits",
  },
  {
    id: "ISSUE-2023-003",
    fieldName: "account_balance",
    rule: "Numeric Range Check",
    issueDescription:
      "Account balances found with negative values where not permitted",
    remediation:
      "Add constraint to prevent negative values for non-overdraft account types and implement warning alert for unusual balance changes",
  },
  {
    id: "ISSUE-2023-004",
    fieldName: "postal_code",
    rule: "Pattern Matching",
    issueDescription:
      "Invalid postal code formats detected for specified countries",
    remediation:
      "Implement country-specific postal code validation patterns and provide format guidance in input field tooltips",
  },
  {
    id: "ISSUE-2023-005",
    fieldName: "customer_name",
    rule: "Required Field Check",
    issueDescription: "Customer name field found empty in 3.2% of records",
    remediation:
      "Make field mandatory in all input forms and run data cleansing process to fill missing values through customer contact campaign",
  },
  {
    id: "ISSUE-2023-006",
    fieldName: "product_category",
    rule: "Reference Data Validation",
    issueDescription:
      "Product categories found that don't match reference data list",
    remediation:
      "Implement dropdown selection instead of free text input and migrate invalid categories to correct values from reference data",
  },
  {
    id: "ISSUE-2023-007",
    fieldName: "tax_id",
    rule: "Format and Checksum Validation",
    issueDescription: "Tax IDs failing checksum validation algorithm",
    remediation:
      "Implement checksum validation on input and conduct review of existing invalid tax IDs through compliance department",
  },
  {
    id: "ISSUE-2023-008",
    fieldName: "transaction_amount",
    rule: "Statistical Outlier Detection",
    issueDescription:
      "Unusual transaction amounts exceeding 3 standard deviations from mean",
    remediation:
      "Implement tiered approval process for unusual amounts and review flagged transactions for potential data entry errors",
  },
  {
    id: "ISSUE-2023-009",
    fieldName: "phone_number",
    rule: "Cross-field Validation",
    issueDescription:
      "Phone number country codes inconsistent with address country",
    remediation:
      "Add cross-validation between country selection and phone format, auto-suggest country code based on selected country",
  },
  {
    id: "ISSUE-2023-010",
    fieldName: "account_creation_date",
    rule: "Temporal Sequence Validation",
    issueDescription:
      "Account creation dates found after first transaction date",
    remediation:
      "Enforce logical date sequence validation and conduct historical data review to correct chronological inconsistencies",
  },
];
