import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("at leatest 3 characters"),
        Rule.max(100).error("max 100 character"),
      ],
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("at leatest 3 characters"),
        Rule.max(1000).error("max 100 character"),
      ],
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "demoLink",
      type: "url",
      title: "Demo Link",
      //   validation: (Rule) => Rule.regex(new RegExp((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?
      // ))
    }),
    defineField({
      name: "githubLink",
      type: "url",
      title: "Github Repositery Link",
    }),
    defineField({
      name: "publishedAt",
      type: "date",
      title: "Published At",
      validation: (Rule) =>
        Rule.min(new Date("2020-06-06").toDateString()).max(
          new Date().toDateString()
        ),
    }),
    defineField({
      name: "isResponsive",
      type: "boolean",
      title: "Is Responsive",
      initialValue: true,
    }),
  ],
});
