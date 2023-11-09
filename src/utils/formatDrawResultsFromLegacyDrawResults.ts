import {
  ExtendedDrawResults,
  ExtendedLEGACYDrawResults,
  LEGACYPrize,
  PrizeAwardable
} from '../types'

export const formatDrawResultsFromLegacyDrawResults = (
  legacyDrawResult: ExtendedLEGACYDrawResults | ExtendedDrawResults
): ExtendedDrawResults => {
  const prizes: (PrizeAwardable | LEGACYPrize)[] = legacyDrawResult.prizes
  const normalizedPrizes: PrizeAwardable[] = prizes.map((prize) => ({
    ...prize,
    tierIndex: 'distributionIndex' in prize ? prize.distributionIndex : prize.tierIndex
  }))
  return {
    ...legacyDrawResult,
    prizes: normalizedPrizes
  }
}
