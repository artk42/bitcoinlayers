import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { InfrastructureProject } from "@/content/props";
import ProjectLinks from "@/components/project-links";
import Categories from "@/components/infrastructure/categories";

const Description: React.FC<{ infrastructure: InfrastructureProject }> = ({
    infrastructure,
}) => {
    return (
        <div className="self-stretch text-text_secondary">
            {parseTextWithLinks(infrastructure.description)}
        </div>
    );
};

const InfrastructureOverview: React.FC<{
    infrastructure: InfrastructureProject;
}> = ({ infrastructure }) => {
    return (
        <div className="flex justify-between pt-6 gap-4">
            <div className="flex flex-col space-y-10 mb-12 w-full">
                <Categories infrastructure={infrastructure} />
                <Description infrastructure={infrastructure} />
                <div className="border-t border-stroke_secondary"></div>
                <ProjectLinks links={infrastructure.links} />
            </div>
        </div>
    );
};

export default InfrastructureOverview;
