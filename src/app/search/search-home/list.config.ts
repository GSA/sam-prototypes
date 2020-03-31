export let listConfigMap = new Map([
    [
        "opportunities", {
          defaultSortValue: "relevanceDescending",
          pageSize: 25,
          sortList:
            [
              { text: "Relevance", value: "relevanceDescending" },
              { text: "Response Date (Latest)", value: "dateDescending" },
              { text: "Response Date (Earliest)", value: "dateAscending" }
            ]
        }
    ],
    [
        "assistancelist", {
          defaultSortValue: "relevanceDescending",
          pageSize: 25,
          sortList:
            [
              { text: "Relevance", value: "relevanceDescending" },
              { text: "Published Date", value: "dateDescending" },
              { text: "Title (A - Z)", value: "titleAscending" },
              { text: "Title (Z - A)", value: "titleDescending" },
              { text: "CFDA Number (Low - High)", value: "cfdaNumberAscending" },
              { text: "CFDA Number (High - Low)", value: "cfdaNumberDescending" }
            ]
        }
    ],
    [
        "registrations", {
          defaultSortValue: "relevanceDescending",
          pageSize: 25,
          sortList:
            [
              { text: "Relevance", value: "relevanceDescending" },
              { text: "Expiration Date (Newest)", value: "dateDescending" },
              { text: "Expiration Date (Oldest)", value: "dateAscending" },
              { text: "Entity Name (A - Z)", value: "nameAscending" },
              { text: "Entity Name (Z - A)", value: "nameDescending" },
              { text: "Unique Entity ID (Low - High)", value: "ueiAscending" },
              { text: "Unique Entity ID (High - Low)", value: "ueiDescending" }
            ]
        }
    ]    
]);
