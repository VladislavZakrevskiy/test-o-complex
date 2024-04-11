import { Card, VStack } from "@/components/ui";

export const Feedbacks = async () => {
	const response = await fetch("http://o-complex.com:1337/reviews");
	const feedbacks: { id: number; text: string }[] = await response.json();

	return feedbacks.map((feedback) => {
		const securedText = feedback.text.replace("<script>", "&ltsсript&gt").replace("</script>", "&lt/sсript&gt");

		return (
			<Card key={feedback.id}>
				<div dangerouslySetInnerHTML={{ __html: securedText }} />
			</Card>
		);
	});
};
