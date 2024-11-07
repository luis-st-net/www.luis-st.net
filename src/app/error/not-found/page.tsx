import HttpStatusError from "@/lib/components/HttpStatusError";

export default function () {
	return (
		<HttpStatusError message="Not Found" details="Ups, the page you are looking for does not exist." statusCode={404} width={400}/>
	);
}