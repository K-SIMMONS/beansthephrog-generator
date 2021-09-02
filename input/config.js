const fs = require("fs");
const width = 3500;
const height = 3500;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const editionSize = 10;
const rarityWeights = [
  {
    value: "super_rare",
    from: 1,
    to: 1,
  },
  {
    value: "rare",
    from: 2,
    to: 5,
  },
  {
    value: "original",
    from: 5,
    to: editionSize,
  },
];

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i) => {
      return {
        name: cleanName(i),
        path: `${path}/${i}`,
      };
    });
};

const layers = [
  {
    elements: {
      original: getElements(`${dir}/background/original`),
      rare: getElements(`${dir}/background/rare`),
      super_rare: getElements(`${dir}/background/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/beanColor/original`),
      rare: getElements(`${dir}/beanColor/rare`),
      super_rare: getElements(`${dir}/beanColor/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/body/original`),
      rare: getElements(`${dir}/body/rare`),
      super_rare: getElements(`${dir}/body/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/floater/original`),
      rare: getElements(`${dir}/floater/rare`),
      super_rare: getElements(`${dir}/floater/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/full/original`),
      rare: getElements(`${dir}/full/rare`),
      super_rare: getElements(`${dir}/full/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/hands/original`),
      rare: getElements(`${dir}/hands/rare`),
      super_rare: getElements(`${dir}/hands/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/hat/original`),
      rare: getElements(`${dir}/hat/rare`),
      super_rare: getElements(`${dir}/hat/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
];

module.exports = {
  layers,
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  rarityWeights,
};
