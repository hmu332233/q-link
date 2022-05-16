module.exports = {
  contents: `### What's Q.Link?

  "Hide your link behind a simple quiz" is the best expression for Q.Link.  
  It is a simple service that adds a quiz ahead the link so that users can access the link only when the answer is correct. You can use it in many situations, including events, job offers, and mobile invitations.  

  The project was inspired by [codecaptcha.io](https://codecaptcha.io).

  ### How to use?

  On Page [Create Q.Link](/links/new), type the link you want to move, the quiz content, and the correct answer to create a Q.Link.  
  Only those who have answered correctly will be able to go to the link.

  ### When to use?

  You can use it in many situations, focusing on fun rather than security.

  - Allow only those who have taken simple quizzes to enter the company' jobs page
  - Allow only those who know your birthday to see your mobile invitation

  ---

  ### Example

  The following is an example of the actual [Q.LINK] (https://q-link.minung.dev). 😀😀  
  Q.Link will help you take the quiz and help the person who answers correctly go to the link you have specified, as shown in the example.

  \`\`\`
  Q. What will go into [?]?

  ABC[?]E
  \`\`\`
  If you are correct, go to \`https://q-link.minung.dev\``,
  correct: 'D',
};
