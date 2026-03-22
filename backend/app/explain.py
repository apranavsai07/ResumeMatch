def explain_score(match_score, semantic_score, matched_skills, missing_skills, total_jd_skills):

    explanations = []

    matched_count = len(matched_skills)
    missing_count = len(missing_skills)

    # 🎯 Skill match quality + numbers
    if total_jd_skills == 0:
        explanations.append("Job description lacks clear skill requirements")
    else:
        ratio = matched_count / total_jd_skills

        if ratio > 0.75:
            explanations.append(f"Strong skill alignment: matched {matched_count}/{total_jd_skills} required skills")
        elif ratio > 0.4:
            explanations.append(f"Moderate skill match: matched {matched_count}/{total_jd_skills} skills")
        elif ratio > 0:
            explanations.append(f"Low skill match: only {matched_count}/{total_jd_skills} skills matched")
        else:
            explanations.append("No relevant skills matched from the job description")

    # ✅ Show matched skills (limited + meaningful)
    if matched_count > 0:
        explanations.append(f"Matched skills include: {', '.join(matched_skills[:5])}")

    # ⚠️ Missing skills impact (with detail)
    if missing_count > 0:
        if missing_count > 5:
            explanations.append(f"Significant skill gaps detected ({missing_count} missing), including: {', '.join(missing_skills[:5])}")
        else:
            explanations.append(f"Missing key skills: {', '.join(missing_skills[:5])}")

    # 🧠 Semantic understanding (context depth)
    if semantic_score >= 80:
        explanations.append("Your experience strongly aligns with the job context and responsibilities")
    elif semantic_score >= 60:
        explanations.append("Your profile shows partial alignment but lacks depth in some areas")
    elif semantic_score >= 40:
        explanations.append("Your experience is somewhat relevant but not strongly aligned")
    else:
        explanations.append("Your resume content does not align well with the job requirements")

    # 🔥 Highlight strength (only if meaningful)
    if matched_count >= 3:
        explanations.append(f"You have a solid foundation in {', '.join(matched_skills[:3])}")

    return explanations