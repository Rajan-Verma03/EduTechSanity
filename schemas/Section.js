const section = {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Section Name",
      type: "string",
    },
    {
      name: "exam",
      type: "reference",
      to: [{ type: "exam" }],
    },
    {
      name: "questionsCount",
      title: "No. of Questions",
      type: "number",
    },
    {
      name: "allotedTime",
      title: "Time limit",
      type: "number",
    },
  ],
};
export default section;
