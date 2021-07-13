const exams = {
  name: "exam",
  title: "Exam",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Exam Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "richtext",
    },
    {
      name: "logo",
      title: "Logo Image",
      type: "image",
    },
    {
      name: "questions",
      title: "Questions",
      type: "file",
    },
  ],
};
export default exams;
