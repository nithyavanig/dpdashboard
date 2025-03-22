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
    rule_name: "Missing Values Check",
    rule_syntax:
      "COUNT(CASE WHEN {field_name} IS NULL THEN 1 ELSE NULL END) > 0",
    field_name: "customer_id",
  },
  {
    rule_name: "Unique Value Check",
    rule_syntax: "COUNT(DISTINCT {field_name}) = COUNT({field_name})",
    field_name: "email",
  },
  {
    rule_name: "Date Range Check",
    rule_syntax: "{field_name} BETWEEN '2023-01-01' AND '2023-12-31'",
    field_name: "order_date",
  },
  {
    rule_name: "String Length Check",
    rule_syntax: "LENGTH({field_name}) <= 50",
    field_name: "product_name",
  },
  {
    rule_name: "Numeric Range Check",
    rule_syntax: "{field_name} >= 0 AND {field_name} <= 1000",
    field_name: "quantity",
  },
  {
    rule_name: "Regex Pattern Check",
    rule_syntax:
      "REGEXP_CONTAINS({field_name}, r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')",
    field_name: "email",
  },
  {
    rule_name: "Categorical Value Check",
    rule_syntax: "{field_name} IN ('Active', 'Inactive', 'Pending')",
    field_name: "status",
  },
  {
    rule_name: "Decimal Precision Check",
    rule_syntax: "CAST({field_name} AS DECIMAL(10, 2)) = {field_name}",
    field_name: "price",
  },
  {
    rule_name: "Negative Value Check",
    rule_syntax: "{field_name} >= 0",
    field_name: "sales_amount",
  },
  {
    rule_name: "Consistent Case Check",
    rule_syntax:
      "{field_name} = UPPER({field_name}) OR {field_name} = LOWER({field_name})",
    field_name: "country",
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
