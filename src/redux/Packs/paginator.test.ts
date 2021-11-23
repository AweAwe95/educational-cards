import {
    packsFilterReducer,
    PacksFilterReducerStateType,
    SecondDescriptionType, setCurrentPage, setFirstNumberSort, setMaxCardsInPack, setMinCardsInPack,
    setPackName, setPage, setPageCount, setSecondDescriptionSort, setTotalCountPage
} from './packs-filter-reducer';


let initialState = {} as PacksFilterReducerStateType;

beforeEach(() => {
    initialState = {
        packName: '',
        min: 1,
        max: 10,
        sortPacks: {
            firstNumber: 0,
            secondDescription: {} as SecondDescriptionType
        },
        page: 1,
        pageCount: 4,
        currentPage: 1,
        totalCountPage: 0,
    };
});

test('packName should be changed', () => {
    const endState = packsFilterReducer(initialState, setPackName('some'));
    expect(endState.packName).toBe('some');
});
test('min should be changed', () => {
    const endState = packsFilterReducer(initialState, setMinCardsInPack(5));
    expect(endState.min).toBe(5);
});

test('max should be changed', () => {
    const endState = packsFilterReducer(initialState, setMaxCardsInPack(100));
    expect(endState.max).toBe(100);
});
test('firstNumber in sortPack should be changed', () => {
    const endState = packsFilterReducer(initialState, setFirstNumberSort(66));
    expect(endState.sortPacks.firstNumber).toBe(66);
});
test('secondDescription in sortPack should be changed', () => {
    const endState = packsFilterReducer(initialState, setSecondDescriptionSort('cardPacks'));
    expect(endState.sortPacks.secondDescription).toBe('cardPacks');
});
test('page should be changed', () => {
    const endState = packsFilterReducer(initialState, setPage(1000));
    expect(endState.page).toBe(1000);
});
test('pageCount should be changed', () => {
    const endState = packsFilterReducer(initialState, setPageCount(100500));
    expect(endState.pageCount).toBe(100500);
});
test('currentPage should be changed', () => {
    const endState = packsFilterReducer(initialState, setCurrentPage(2));
    expect(endState.currentPage).toBe(2);
});
test('totalCountPage should be changed', () => {
    const endState = packsFilterReducer(initialState, setTotalCountPage(4));
    expect(endState.totalCountPage).toBe(4);
});

