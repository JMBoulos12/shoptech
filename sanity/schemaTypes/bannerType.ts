import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Banner Title",
      type: "string",
    }),
  ],
});
