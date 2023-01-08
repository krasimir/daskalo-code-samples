const email = `
  Hi John,

  I hope this email finds you well. I wanted to reach out to you about the project we discussed last week. As we discussed, I have already sent the proposal to our client via email. I have copied Sarah on this email as well, just in case you haven't been in touch with her recently. Sarah's email address is sarah@example.com and her phone number is 555-555-1212. Please let me know if you have any questions or concerns.

  Best regards, Bob

  P.S. My email address is bob@example.com in case you need to contact me directly.
`;

console.log(
  email.replace(/\S+@(\S+\.\S+)/g, '...@$1')
)



