
export const createMonstersJson = (monsters) => {
    let result = [];

    for (const m of monsters) {
        const monster = {};
        // 基礎パラメータ
        monster.MonsterId = m.MonsterId;
        monster.MonsterName = m.MonsterName;
        monster.MonsterType = m.MonsterType;
        monster.Hp = m.Hp;
        monster.MaxHp = m.MaxHp;
        monster.Attack = m.Attack;
        monster.Speed = m.Speed;
        monster.Week = m.Week;

        // スキル
        const skills = [];
        for (const sk of m.Skills) {
            const skill = {};

            skill.SkillId = sk.SkillId;
            skill.SkillName = sk.SkillName;
            skill.SkillType = sk.SkillType;
            skill.ElementType = sk.ElementType;
            skill.StateType = sk.StateType;
            skill.TargetType = sk.TargetType;
            skill.Attack = sk.Attack;
            skill.Weight = sk.Weight;
            skill.Critical = sk.Critical;

            skills.push(skill);
        }
        monster.Skills = skills;

        // 状態
        const status = [];
        for (const st of m.Status) {
            const state = {};

            state.StateType = st.StateType;
            state.Name = st.Name;
            state.MaxDuration = st.MaxDuration;
            state.DurationCount = st.DurationCount;

            status.push(state);
        }
        monster.Status = status;

        result.push(monster);
    }
    return result;
}
