import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from 'react';

const Gallery = ({ page, projects }) => {
	console.log(projects)

	const [amount, setAmount] = useState(5);
	
	useEffect(() => {
		function handleResize(){
			if (window.innerWidth>1400){
				setAmount(5);
			} 
			if (window.innerWidth<1400){
				setAmount(3);
			}
			if (window.innerWidth<900){
				setAmount(2);
			}
		}
		window.addEventListener('resize', handleResize)
  })
	

  return (
		<div className="gallery-page">
			<div className="filters">
				{page.data.filters?.map((item,i) => {
					return(
						<div className="filter" key={`filter${i}`}>{item.filter}</div>
					)
				})}
			</div>
			<div className="gallery-grid" id="gallery">
				<div className="row">
					{projects.map((item, i) => {
						return(
							<>
								{i %amount==0 &&
									<div className="gallery-item" key={`gallery${i}`}>
										<div className="cover-image">
											<PrismicNextImage field={item.data.cover_image}/>
										</div>
										<div className="project-title">{item.data.title}</div>
										<div className="description">
											 <PrismicRichText field={item.data.description}/>
										</div>
									</div>
								}
							</>
						)
					})}
				</div>
				<div className="row">
					{projects.map((item, i) => {
						return(
							<>
								{i %amount==1 &&
									<div className="gallery-item" key={`gallery1${i}`}>
										<div className="cover-image">
											<PrismicNextImage field={item.data.cover_image}/>
										</div>
										<div className="project-title">{item.data.title}</div>
										<div className="description">
											 <PrismicRichText field={item.data.description}/>
										</div>
									</div>
								}
							</>
						)
					})}
				</div>
				<div className="row">
					{projects.map((item, i) => {
						return(
							<>
								{i %amount==2 &&
									<div className="gallery-item" key={`gallery2${i}`}>
										<div className="cover-image">
											<PrismicNextImage field={item.data.cover_image}/>
										</div>
										<div className="project-title">{item.data.title}</div>
										<div className="description">
											 <PrismicRichText field={item.data.description}/>
										</div>
									</div>
								}
							</>
						)
					})}
				</div>
				<div className="row">
					{projects.map((item, i) => {
						return(
							<>
								{i %amount==3 &&
									<div className="gallery-item" key={`gallery3${i}`}>
										<div className="cover-image">
											<PrismicNextImage field={item.data.cover_image}/>
										</div>
										<div className="project-title" >{item.data.title}</div>
										<div className="description">
											 <PrismicRichText field={item.data.description}/>
										</div>
									</div>
								}
							</>
						)
					})}
				</div>
				<div className="row">
					{projects.map((item, i) => {
						return(
							<>
								{i %amount==4 &&
									<div className="gallery-item" key={`gallery4${i}`}>
										<div className="cover-image">
											<PrismicNextImage field={item.data.cover_image}/>
										</div>
										<div className="project-title">{item.data.title}</div>
										<div className="description">
											 <PrismicRichText field={item.data.description}/>
										</div>
									</div>
								}
							</>
						)
					})}
				</div>

			</div>
		</div>
  );
};

export default Gallery;
