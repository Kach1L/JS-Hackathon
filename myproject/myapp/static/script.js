// const data = {
//     correct_answer: "xxx",
//     wrong_answer1: "xxx",
//     wrong_answer2: "xxx",
//     wrong_answer3: "xxx",
//   };
  
//   fetch("http://localhost:8000/options/create/", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
  
//   fetch("http://localhost:8000/options/all/")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });