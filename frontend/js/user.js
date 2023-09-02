const userPicUrls = [
  "https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w996_r0.9975262832405689_fpx44.98_fpy48.86.webp",
  "https://creativereview.imgix.net/content/uploads/2021/10/imaeg.jpg?auto=compress,format&q=60&w=1200&h=",
  "https://visionarymarketing.com/wp-content/uploads/2022/01/vente-art-nft-ester-barend-ravishing-big-scaled-e1641745893579.jpg.webp",
  "https://storage.googleapis.com/techsauce-prod/ugc/uploads/2021/5/TS%20blogpost_8607610.jpg",
  "https://i.guim.co.uk/img/media/3c90fbf9666d4e73be1122eb33afed235db41b1f/0_0_5000_3000/master/5000.jpg?width=620&dpr=2&s=none",
  "https://images.augustman.com/wp-content/uploads/sites/2/2022/06/01145052/galans-hunger-by-arya-mularama-scaled-1.jpeg",
  "https://miro.medium.com/v2/resize:fit:1400/1*44wuZU374LVyZ5IzUOTV8g.png",
  "https://www.ie.edu/insights/wp-content/uploads/2022/01/San-Jose-Feature.jpg",
  "https://cdnb.artstation.com/p/assets/images/images/048/127/939/large/akiro-art-6.jpg?1649265944",
  "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zlyMSV4wcE-O6_YQjLyo2uyeIEbnpKJWTw&usqp=CAU",
  "https://i.ebayimg.com/thumbs/images/g/qbMAAOSwwN9ji-cd/s-l640.jpg",
  "https://www.artmajeur.com/medias/standard/a/l/alpdygnn/artwork/16140400_frame-1.jpg",
  "https://nftcalendar.io/storage/uploads/events/2023/8/ag0gzhyW0FlnkituMTMnevjM9K6O2XYJtRV5OrGP.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLveLVD-nNoGpwfhTuLszqxxc8kYOnO4sGaQ&usqp=CAU"
];





const quizQuestions = {
  html: {
    easy: {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "High-Level Text Markup Language", "Hypertext Machine Language"],
      correctAnswer: "Hypertext Markup Language"
    },
    medium: {
      question: "What is the purpose of the 'alt' attribute in an image tag?",
      options: ["Image description", "Image alignment", "Image width", "Image source"],
      correctAnswer: "Image description"
    },
    hard: {
      question: "What is the difference between 'div' and 'span' elements in HTML?",
      options: ["Block-level vs. Inline", "Layout vs. Style", "No Difference", "Semantic vs. Non-semantic"],
      correctAnswer: "Block-level vs. Inline"
    }
  },

  css: {
    easy: {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheet", "Creative Style Selector", "Computer Style Sheet", "Cascading Styling Script"],
      correctAnswer: "Cascading Style Sheet"
    },
    medium: {
      question: "How can you select all 'p' elements with class 'highlight' in CSS?",
      options: ["p.highlight", ".highlight p", "p .highlight", "highlight.p"],
      correctAnswer: "p .highlight"
    },
    hard: {
      question: "What is the CSS 'box-sizing' property used for?",
      options: ["Layout Control", "Shadow Styling", "Background Setting", "Border Box Model"],
      correctAnswer: "Layout Control"
    }
  },

  javascript: {
    easy: {
      question: "What is the purpose of 'var' in JavaScript?",
      options: ["Variable Declaration", "Constant Definition", "Function Scope", "Data Storage"],
      correctAnswer: "Variable Declaration"
    },
    medium: {
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: ["Type Coercion", "Strict Comparison", "Function Equality", "Variable Assignment"],
      correctAnswer: "Type Coercion"
    },
    hard: {
      question: "What is a closure in JavaScript and why is it important?",
      options: ["Function Encapsulation", "Data Privacy", "Variable Access", "Memory Allocation"],
      correctAnswer: "Variable Access"
    }
  },
  react: {
    easy: {
      question: "What is a React component?",
      options: ["JSX Function", "HTML Element", "CSS Styling", "React State"],
      correctAnswer: "JSX Function"
    },
    medium: {
      question: "What is 'state' in React and how is it different from 'props'?",
      options: ["Component Data", "Component Input", "Component Output", "Component Logic"],
      correctAnswer: "Component Data"
    },
    hard: {
      question: "Explain the concept of virtual DOM in React.",
      options: ["Efficient DOM Updates", "3D Graphics Rendering", "JavaScript Framework", "User Interface Components"],
      correctAnswer: "Efficient DOM Updates"
    }
  },
  http: {
    easy: {
      question: "What does HTTP stand for?",
      options: ["Hypertext Transfer Protocol", "Hyperlink Text Transfer Protocol", "High-Level Text Transfer Protocol", "Hypertext Transmission Protocol"],
      correctAnswer: "Hypertext Transfer Protocol"
    },
    medium: {
      question: "What is the difference between GET and POST requests in HTTP?",
      options: ["Data Retrieval vs. Data Submission", "Server Communication vs. Client Interaction", "No Difference", "Data Encryption vs. Data Decryption"],
      correctAnswer: "Data Retrieval vs. Data Submission"
    },
    hard: {
      question: "Explain the purpose of HTTP status codes like 404 and 500.",
      options: ["Request Outcomes", "Data Encryption", "Port Specification", "Authentication Tokens"],
      correctAnswer: "Request Outcomes"
    }
  }
};
