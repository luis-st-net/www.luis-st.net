import HttpStatusError from "@/lib/components/HttpStatusError";

export default function () {
	return (
		<HttpStatusError message="Forbidden" details="You are not allowed to access this page." statusCode={403} width={350}/>
	);
}
