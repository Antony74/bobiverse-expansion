import { getFileContentWithCache } from './getFileContentWithCache';

const main = async () => {
    await getFileContentWithCache(
        'https://bobiverse.fandom.com/wiki/Timeline',
        'Timeline.html',
    );
};

main();
