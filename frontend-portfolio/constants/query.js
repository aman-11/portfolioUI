export const sanityQuery = {
  toolsQuery: `*[_type == "tools"]`,
  skillsQuery: `*[_type == "skills"]`,
  expQuery: `*[_type == "experiences"] | order(value desc)`,
  workExpQuery: `*[_type == "workExperience"] | order(order)`,
  projects: `*[_type == "works"]`,
};
