export type UserData = {
    name: string,
    email: string,
    emailVerified: boolean,
    image: string,
    userType: string
}

export type TeamData = {
    id?: string,
    name: string,
    coach: CoachData,
    athletes: AthleteData[],
    coachId: string
}

export type AthleteData = {
    id?: string,
    user: UserData,
    team: TeamData,
    coach: CoachData,
    teamId: string,
    coachId: string,
    userId: string
}

export type CoachData = {
    id?: string,
    user?: UserData,
    teams: TeamData[],
    athletes: AthleteData[]
    userId: string,
}