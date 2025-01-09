export const GET = async (req: Request) => {
  return Response.json({
    user: null,
    userDetails: null,
    subscriptions: [],
    productOwnerships: [],
    teams: {
      all: [],
      personal: null,
      orgs: [],
      main: null,
    },
    connections: {
      discord: false,
      github: false,
    },
    accessInfo: {
      hasAccess: false,
      hasActiveSubscription: false,
      hasActiveTeamSubscription: false,
      hasActiveClaim: false,
      hasActiveTeamClaim: false,
      hasDiscordAccess: false,
      hasGithubAccess: false,
    }
  })
} 