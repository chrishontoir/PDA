require( 'minitest/autorun' )
require( 'minitest/rg')
require_relative( 'testing_task_2.rb' )

class Task2Test < MiniTest::Test

  def setup
    @game = CardGame.new()
    @card1 = Card.new("Hearts", 1);
    @card2 = Card.new("Hearts", 3);
  end

  def test_checkforAce_true
    result = @game.checkforAce(@card1)
    assert_equal(true, result)
  end

  def test_checkforAce_false
    result = @game.checkforAce(@card2)
    p @card2
    assert_equal(false, result)
  end

  def test_highest_card
    result = @game.highest_card(@card1, @card2)
    assert_equal(3, result)
  end

  def test_cards_total
    result = CardGame.cards_total([@card1, @card2])
    assert_equal("You have a total of 4", result)
  end

end
