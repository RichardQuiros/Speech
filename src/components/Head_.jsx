import React from "react";
import { Helmet,HelmetProvider } from "react-helmet-async";

const Head = ({
	title = "📢Speech | template React & Tailwind",
	description = "Speech is a template that seeks to break paradigms with presentations, able to create pretentions with the best technologies!",
	url = process.env.REACT_APP_WEBSITE_URL || "http://localhost:3000/",
	image = process.env.REACT_APP_WEBSITE_URL ?`${process.env.URL}/Speech.jpg` : "http://localhost:3000/Speech.jpg",
	googleVerification = process.env.GOOGLE_VERIFICATION || "",
	children
}) => {
	return (
	  <HelmetProvider>
		<Helmet>
			<meta charset="utf-8" />
			<meta data-n-head="1" name="google-site-verification" content={googleVerification}/>
			{/*<!-- Primary Meta Tags -->*/}
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			{/*<!-- Open Graph / Facebook -->*/}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			{/*<!-- Twitter -->*/}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />
			{children}
		</Helmet>
	  </HelmetProvider>
	);
};

export default Head;
