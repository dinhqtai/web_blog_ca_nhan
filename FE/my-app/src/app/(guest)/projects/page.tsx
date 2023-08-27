'use client'
import { useEffect, useState } from 'react';
import Container from '../../components/container';
import ItemProject, { IProjects } from '../../components/itemProjects/item';
import { getProjects } from '@/app/api/project';
export default function Projects() {
    const [projects, setProjects] = useState<IProjects[]>()
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await getProjects()
                setProjects(data)
            } catch (err) {

            }
        }
        fetchProjects()
    }, [])
    return (
        <Container >
            <div className='w-[90%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-20 mt-10'>
                    {projects && projects.length > 0 ? (
                        projects.map(project => (
                            <ItemProject key={project._id} data={project} />
                        ))
                    ) : (
                        <div>Không tồn tại dự án</div>
                    )}
                </div>
            </div>
        </Container>
    );
}
