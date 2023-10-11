import { BigNumber } from 'ethers'

import { DrawResults, LEGACYDrawResults, LEGACYPrize, PrizeAwardable } from '../types'

export const formatDrawResultsFromLegacyDrawResults = (
  legacyDrawResult: LEGACYDrawResults | DrawResults
): DrawResults => {
  const _prizes: (PrizeAwardable | LEGACYPrize)[] = legacyDrawResult.prizes
  const prizes: PrizeAwardable[] = _prizes.map((prize) => ({
    amount: BigNumber.from(prize.amount),
    tierIndex: 'distributionIndex' in prize ? prize.distributionIndex : prize.tierIndex,
    pick: BigNumber.from(prize.pick)
  }))
  const drawResults: DrawResults = {
    drawId: legacyDrawResult.drawId,
    totalValue: legacyDrawResult.totalValue,
    prizes
  }

  return drawResults
}
