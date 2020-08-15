export default {
  TaskId: "",
  Result: {
    Tags: [
      {
        startPos: 0,
        endPos: 787,
        report: "preadability",
        urls: null,
        category: "preadability3",
        categoryDisplayName: "Paragraph Readability 3",
        subcategory:
          "During the regional and local elections of September 2015, 30,000 mobile phone lines were reportedly tapped across the country. The mass surveillance operation, ordered by the Ministry of Interior, was first reported by the Assabah newspaper. The Ministry set up commissions headed by Crown Prosecutors to supervise the operation. The authorities, who acknowledged the operation, explained that the measure was dictated by “the desire to ensure a degree of transparency in the election.” The list of individuals targeted by the operation included candidates, regional or provincial party officials, in addition to local government officials and people with no direct link to the vote but whose “occupations or activities” were deemed “related to the elections,” according to the Ministry.",
        hint:
          "This paragraph is hard to read. Consider revising it. Flesch Reading Ease 21.6",
        suggestions: [],
        isSubTag: false,
        helpId: "PARA_READABILITY_2",
        id: "fefaa3f5-91a4-46c0-9e0a-4c8e10358edc",
        invisible: false,
        color: 1
      },
      {
        startPos: 224,
        endPos: 230,
        report: "grammar",
        urls: null,
        category: "grammarspelling",
        categoryDisplayName: "Grammar (spelling)",
        subcategory: "Assabah",
        hint: "Unknown word: Assabah",
        suggestions: ["Assaba", "isobar", "izba", "OSB", "USSB"],
        isSubTag: false,
        helpId: "SIMPLE_SPELLING",
        id: "947a65be-aa18-4382-a6a2-8ab8b3079370",
        invisible: false,
        color: 1
      }
    ],
    WordCount: 118,
    Stats: {
      ByParagraph: [
        [
          {
            StatType: "WordCount",
            Values: [118],
            Value: 118
          },
          {
            StatType: "SyllableCount",
            Values: [225],
            Value: 225
          },
          {
            StatType: "SentenceCount",
            Values: [5],
            Value: 5
          },
          {
            StatType: "ParagraphCount",
            Values: [1],
            Value: 1
          },
          {
            StatType: "CharacterWithoutSpaceCount",
            Values: [652],
            Value: 652
          }
        ]
      ],
      ForDocument: [
        {
          StatType: "WordCount",
          Values: [118],
          Value: 118
        },
        {
          StatType: "SyllableCount",
          Values: [225],
          Value: 225
        },
        {
          StatType: "SentenceCount",
          Values: [5],
          Value: 5
        },
        {
          StatType: "ParagraphCount",
          Values: [1],
          Value: 1
        },
        {
          StatType: "StickyWordCount",
          Values: [0],
          Value: 0
        },
        {
          StatType: "CharacterWithoutSpaceCount",
          Values: [652],
          Value: 652
        }
      ]
    },
    Summaries: [
      {
        ReportDisplayName: "Readability",
        ReportName: "readability",
        SummaryItems: [
          {
            Text: "Estimated Reading Time: 28 sec",
            Graph: null,
            Url: null,
            UrlText: null,
            SubItems: null,
            IsPositive: "Information",
            Category: null,
            CategoryName: "none",
            NumIssues: 0
          },
          {
            Text: "This paragraph is very hard to read. Consider revising it.",
            Graph: null,
            Url: null,
            UrlText: null,
            SubItems: [
              {
                TagIds: [],
                Text: "Flesch Reading Ease 21.6",
                SuggestionCategory: null,
                SubCategory: null,
                SearchTerm: null
              },
              {
                TagIds: [],
                Text: "Flesch-Kincaid Grade 16.1",
                SuggestionCategory: null,
                SubCategory: null,
                SearchTerm: null
              },
              {
                TagIds: [],
                Text: "Coleman-Liau 15.4",
                SuggestionCategory: null,
                SubCategory: null,
                SearchTerm: null
              },
              {
                TagIds: [],
                Text: "Automated Readability Index 16.4",
                SuggestionCategory: null,
                SubCategory: null,
                SearchTerm: null
              }
            ],
            IsPositive: "Negative",
            Category: null,
            CategoryName: "none",
            NumIssues: 1
          },
          {
            Text: "1 very difficult-to-read paragraph",
            Graph: null,
            Url: null,
            UrlText: null,
            SubItems: [
              {
                TagIds: ["fefaa3f5-91a4-46c0-9e0a-4c8e10358edc"],
                Text: "During the",
                SuggestionCategory: null,
                SubCategory: null,
                SearchTerm: null
              }
            ],
            IsPositive: "Negative",
            Category: {
              Description: null,
              DisplayName: "Paragraph Readability 3",
              Name: "preadability3"
            },
            CategoryName: "preadability3",
            NumIssues: 1
          },
          {
            Text: "0 slightly difficult-to-read paragraphs",
            Graph: null,
            Url: null,
            UrlText: null,
            SubItems: [],
            IsPositive: "Positive",
            Category: {
              Description: null,
              DisplayName: "Paragraph Readability 2",
              Name: "preadability2"
            },
            CategoryName: "preadability2",
            NumIssues: 0
          }
        ],
        NumberOfIssues: 2,
        ReportDescription:
          "Provides a series of readability measures for your text so you can determine if it is suitable for your intended audience."
      },
      {
        ReportDisplayName: "Grammar Check",
        ReportName: "grammar",
        SummaryItems: [
          {
            Text: "spelling 1 issue found",
            Graph: null,
            Url: null,
            UrlText: null,
            SubItems: [
              {
                TagIds: ["947a65be-aa18-4382-a6a2-8ab8b3079370"],
                Text: "Assabah (1)",
                SuggestionCategory: null,
                SubCategory: "Assabah",
                SearchTerm: "Assabah"
              }
            ],
            IsPositive: "Negative",
            Category: {
              Category: "spelling",
              Description: null,
              DisplayName: "Grammar (spelling)",
              Name: "grammarspelling"
            },
            CategoryName: "grammarspelling",
            NumIssues: 1
          }
        ],
        NumberOfIssues: 1,
        ReportDescription:
          "Checks your text for grammar errors and potential word mis-use."
      }
    ]
  }
};
