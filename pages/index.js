import Head from "next/head";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Gallery from "../components/Gallery";

const Index = ({ page, settings, projects }) => {
  console.log(page)
  return (
    <Layout settings={settings}>
      <Head>
        <title>{page.data.title}</title>
      </Head>
      <div className="top-info">
        <div className="columns">
          <PrismicRichText field={page.data.info}/>
        </div>
        <div className="links">
          {page.data.links.map((item, i) => {
            return(
              <a href={item.link.url} target="_blank" rel="noreferrer" key={`link${i}`}>
                {item.link_text}
              </a>
            )
          })}
        </div>
      </div>
      {/* <Gallery page={page} projects={projects}/> */}
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("home", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const projects = await client.getAllByType("project", { 
    lang: locale,
    orderings: {
			field: 'my.project.year',
			direction: 'desc',
		},
  });

  return {
    props: {
      page,
      settings,
      projects,
    },
  };
}
