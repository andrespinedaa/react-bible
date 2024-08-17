import { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";
import {
	VerseBody,
	VerseHeader,
	VerseNumber,
	Verses,
	VerseSubTitle,
	VerseText,
	VerseTitle,
} from "../../../@verse";
import BibleBody from "./BibleBody";
import VerseReference from "../../../@verse/verseReference/VerseReference";

type BibleBodyProps = React.ComponentProps<typeof BibleBody>;

const meta: Meta<BibleBodyProps> = {
	component: BibleBody,
	subcomponents: { Verses: Verses as ComponentType<unknown> },
	title: "Bible/Bible Body/BibleBody",
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<BibleBodyProps>;

export const BibleBodyBox: Story = {
	name: "Bible Body",
	render: () => (
		<BibleBody>
			<Verses>
				<VerseHeader>
					<VerseTitle />
					<VerseSubTitle />
				</VerseHeader>
				<VerseBody>
					<VerseNumber />
					<VerseText>
						<VerseReference />  
					</VerseText>
				</VerseBody>
			</Verses>
		</BibleBody>
	),
};
