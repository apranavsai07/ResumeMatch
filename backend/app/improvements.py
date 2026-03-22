import random

def generate_improvements(missing_skills, matched_skills, semantic_score):

    improvements = {
        "skill_improvements": [],
        "resume_improvements": [],
        "project_suggestions": []
    }

    # 🎯 1. Skill-based improvements (not repetitive)
    for skill in missing_skills[:4]:
        templates = [
            f"Build a project using {skill} to demonstrate practical experience",
            f"Learn {skill} and integrate it into one of your existing projects",
            f"Take a focused approach to mastering {skill} with hands-on implementation"
        ]
        improvements["skill_improvements"].append(random.choice(templates))

    # 🧠 2. Resume improvements (based on semantic score)
    if semantic_score < 50:
        improvements["resume_improvements"].extend([
            "Rewrite your resume to better reflect backend development responsibilities",
            "Include more job-relevant keywords from the description",
            "Clearly highlight your role and contributions in each project"
        ])
    elif semantic_score < 70:
        improvements["resume_improvements"].extend([
            "Improve alignment by refining wording to match job requirements",
            "Add more technical depth to your project descriptions",
        ])
    else:
        improvements["resume_improvements"].extend([
            "Optimize bullet points to highlight impact and scalability",
            "Refine wording to stand out among similar candidates"
        ])

    # Always useful
    improvements["resume_improvements"].append(
        "Quantify your impact (e.g., performance improvement, users handled)"
    )

    # 🚀 3. Project suggestions (based on gaps)
    if "docker" in missing_skills:
        improvements["project_suggestions"].append(
            "Containerize a backend application using Docker and deploy it"
        )

    if "aws" in missing_skills:
        improvements["project_suggestions"].append(
            "Deploy a full-stack or backend project on AWS (EC2 or S3)"
        )

    if "rest api" in missing_skills or "api" in missing_skills:
        improvements["project_suggestions"].append(
            "Build a REST API with authentication and database integration"
        )
    if "database" in missing_skills or "sql" in missing_skills:
        improvements["project_suggestions"].append(
            "Design and optimize a database-driven application with efficient queries"
        )
# fallback if no specific mapping
    if len(improvements["project_suggestions"]) == 0:
        improvements["project_suggestions"].append(
            "Build a scalable backend project with authentication and database support"
        )
    
    return improvements