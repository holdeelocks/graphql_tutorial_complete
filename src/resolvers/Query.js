async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [{ description_contains: args.filter }, { url_contains: args.filter }]
      }
    : {};

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });

  const count = await context.prisma
    .linksConnection({
      where
    })
    .aggregate()
    .count();

  return {
    links,
    count
  };
}

function info(parents, args, context, info) {
  return "This is the API of a Hackernews Clone";
}

// function findById(parents, args, context, info) {
//   let links = context.prisma.links;
//   return links.find(link => link.id === args.id);
// }

module.exports = {
  feed,
  info
  // findById
};
