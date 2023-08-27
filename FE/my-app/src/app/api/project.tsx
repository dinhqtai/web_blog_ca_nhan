import instant from ".";
export const getProjects = async () => {
    return await instant.get("projects");
}