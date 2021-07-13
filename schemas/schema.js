import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import exams from "./Exams";
import section from "./Section";
import richtext from "./richtext";
import question from "./Question";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([exams, section, richtext, question]),
});
