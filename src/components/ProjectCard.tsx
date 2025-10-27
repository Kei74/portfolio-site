import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Project } from '@/types/project';


const ProjectCard: React.FC<{project: Project}> = ({ project }) => {
    return (
        <Card sx={{ margin: 2, maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" sx={{ marginTop: 2, display: 'inline-block' }}>
                    {project.link}
                </Link>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
