import React from "react";
import theme from "theme";
import { Theme, Link, Box, Strong, Text, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box height="200px" />
		<Text font="20px undefined" text-align="center" margin="16px 0px 16px 0px">
			<Strong
				data-q-widget-type="PRIMITIVE"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Пустой виджет (без url)
			</Strong>
		</Text>
		<Components.SoundCloud />
		<Text font="20px undefined" text-align="center" margin="100px 0px 16px 0px">
			<Strong
				data-q-widget-type="PRIMITIVE"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Первый тип виджета (small)
			</Strong>
		</Text>
		<Components.SoundCloud type="small" url="https://soundcloud.com/tbilisi-beats/andy-panda-rude-mantras?in=tbilisi-beats/sets/andy-panda-king-kong" />
		<Hr />
		<Components.SoundCloud url="https://soundcloud.com/tbilisi-beats/andy-panda-rude-mantras?in=tbilisi-beats/sets/andy-panda-king-kong" type="small" width="450px" />
		<Hr />
		<Components.SoundCloud url="https://soundcloud.com/tbilisi-beats/andy-panda-rude-mantras?in=tbilisi-beats/sets/andy-panda-king-kong" type="small" width="300px" />
		<Text font="20px undefined" text-align="center" margin="100px 0px 16px 0px">
			<Strong
				data-q-widget-type="PRIMITIVE"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Первый тип виджета (standart)
			</Strong>
		</Text>
		<Components.SoundCloud url="https://soundcloud.com/tbilisi-beats/andy-panda-rude-mantras?in=tbilisi-beats/sets/andy-panda-king-kong" />
		<Hr />
		<Components.SoundCloud url="https://soundcloud.com/tbilisi-beats/andy-panda-rude-mantras?in=tbilisi-beats/sets/andy-panda-king-kong" width="450px" />
		<Hr />
		<Components.SoundCloud url="https://soundcloud.com/tbilisi-beats/andy-panda-rude-mantras?in=tbilisi-beats/sets/andy-panda-king-kong" width="174px" />
		<Text font="20px undefined" text-align="center" margin="100px 0px 16px 0px">
			<Strong
				data-q-widget-type="PRIMITIVE"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Первый тип виджета (visual)
			</Strong>
		</Text>
		<Components.SoundCloud type="visual" url="https://soundcloud.com/tbilisi-beats/sets/andy-panda-king-kong" />
		<Hr />
		<Components.SoundCloud type="visual" url="https://soundcloud.com/tbilisi-beats/sets/andy-panda-king-kong" width="450px" />
		<Hr />
		<Components.SoundCloud type="visual" url="https://soundcloud.com/tbilisi-beats/sets/andy-panda-king-kong" width="308px" />
		<Box height="200px">
			<Hr />
		</Box>
		<Box />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});