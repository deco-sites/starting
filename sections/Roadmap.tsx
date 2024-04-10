import Roadmap from "site/components/producthunt/Roadmap.tsx";
import { Feature } from "site/components/producthunt/Roadmap.tsx";

function RoadMap(props: { features?: Feature[] }) {
    return <Roadmap features={props.features || []} />;
}

export default RoadMap;