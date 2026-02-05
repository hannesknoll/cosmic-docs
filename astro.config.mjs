// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Docs",

      logo: {
        src: "./src/assets/logos/cosmic.webp",
      },

			customCss: ["./src/styles/custom.css"],

			social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Documentation", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
