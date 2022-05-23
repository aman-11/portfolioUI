export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    { name: "role", title: "Role", type: "string" },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "text",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
};
